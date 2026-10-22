
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCheck,
  Clock3,
  Eye,
  EyeOff,
  LoaderCircle,
  Mail,
  MessageCircleHeart,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
  X,
} from "lucide-react";

const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "in-progress", label: "In progress" },
  { value: "prayed-for", label: "Prayed for" },
  { value: "closed", label: "Closed" },
];

const STATUS_STYLES = {
  pending: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  "in-progress": "border-blue-400/20 bg-blue-400/10 text-blue-200",
  "prayed-for": "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  closed: "border-white/10 bg-white/[0.05] text-white/50",
};

function formatDate(date) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function StatusBadge({ status }) {
  const label =
    STATUS_OPTIONS.find((option) => option.value === status)?.label || status;

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium ${
        STATUS_STYLES[status] || STATUS_STYLES.closed
      }`}
    >
      {label}
    </span>
  );
}

function StatCard({ label, value, icon: Icon, detail }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-white/45">{label}</p>
        <Icon size={17} className="text-violet-200/70" />
      </div>
      <p className="mt-3 text-2xl font-medium tracking-tight">{value}</p>
      <p className="mt-1 text-[11px] text-white/30">{detail}</p>
    </div>
  );
}

export default function PrayerRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    prayedFor: 0,
    closed: 0,
    unread: 0,
  });

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);

  const loadRequests = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        page: String(page),
        q: search,
        status,
      });

      const response = await fetch(
        `/api/admin/prayer-requests?${params.toString()}`,
        { cache: "no-store" }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load prayer requests.");
      }

      setRequests(data.requests || []);
      setStats(data.stats || {});
      setTotal(data.pagination?.total || 0);
      setTotalPages(data.pagination?.totalPages || 1);

      setSelected((current) => {
        if (!current) return null;
        return (
          (data.requests || []).find((item) => item.id === current.id) || null
        );
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, [page, search, status]);

  useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  async function updateRequest(id, updates) {
    setUpdating(true);
    setError("");
    setNotice("");

    try {
      const response = await fetch(`/api/admin/prayer-requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to update the request.");
      }

      setSelected(data.request);
      setNotice(data.message || "Prayer request updated.");
      await loadRequests();

      // loadRequests is memoized; selection remains in sync with the list.
    } catch (err) {
      setError(err.message || "Unable to update the request.");
    } finally {
      setUpdating(false);
    }
  }

  async function openRequest(item) {
    setSelected(item);
    setNotice("");
    setError("");

    if (!item.isRead) {
      await updateRequest(item.id, { isRead: true });
    }
  }

  async function deleteRequest() {
    if (!deleteTarget) return;

    setUpdating(true);
    setError("");
    setNotice("");

    try {
      const response = await fetch(
        `/api/admin/prayer-requests/${deleteTarget.id}`,
        { method: "DELETE" }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to delete the request.");
      }

      setSelected((current) =>
        current?.id === deleteTarget.id ? null : current
      );
      setDeleteTarget(null);
      setNotice("Prayer request deleted.");
      await loadRequests();
    } catch (err) {
      setError(err.message || "Unable to delete the request.");
    } finally {
      setUpdating(false);
    }
  }

  function submitSearch(event) {
    event.preventDefault();
    setPage(1);
    setSearch(query.trim());
  }

  return (
    <main className="min-h-screen bg-[#080808] px-4 py-7 text-white sm:px-7 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/admin"
          className="mb-7 inline-flex items-center gap-2 text-xs text-white/40 transition hover:text-white"
        >
          <ArrowLeft size={14} />
          Admin dashboard
        </Link>

        <header className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-violet-200/70">
              <MessageCircleHeart size={17} />
              <span className="text-[10px] font-medium uppercase tracking-[0.24em]">
                Ministry care
              </span>
            </div>

            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Prayer requests
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
              Receive, review, and manage prayer requests submitted through the
              ministry website.
            </p>
          </div>

          <button
            type="button"
            onClick={loadRequests}
            disabled={loading}
            className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.04] px-4 text-xs text-white/70 transition hover:bg-white/[0.08] disabled:opacity-50 sm:self-auto"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Refresh inbox
          </button>
        </header>

        <section className="mb-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            label="All requests"
            value={stats.total ?? 0}
            icon={MessageCircleHeart}
            detail="Total submissions"
          />
          <StatCard
            label="Pending"
            value={stats.pending ?? 0}
            icon={Clock3}
            detail="Awaiting review"
          />
          <StatCard
            label="In progress"
            value={stats.inProgress ?? 0}
            icon={ShieldCheck}
            detail="Being followed up"
          />
          <StatCard
            label="Unread"
            value={stats.unread ?? 0}
            icon={Mail}
            detail="Not yet opened"
          />
        </section>

        {notice && (
          <div
            role="status"
            className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] px-4 py-3 text-xs text-emerald-200"
          >
            <Check size={15} />
            {notice}
            <button
              type="button"
              onClick={() => setNotice("")}
              className="ml-auto text-emerald-200/60 hover:text-white"
              aria-label="Dismiss notice"
            >
              <X size={15} />
            </button>
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="mb-5 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-xs text-red-200"
          >
            {error}
          </div>
        )}

        <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          <div className="flex flex-col gap-3 border-b border-white/[0.07] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <form
              onSubmit={submitSearch}
              className="flex min-w-0 flex-1 gap-2"
            >
              <div className="relative min-w-0 flex-1 sm:max-w-md">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search name, email, phone or request..."
                  aria-label="Search prayer requests"
                  className="h-10 w-full rounded-xl border border-white/[0.08] bg-black/30 pl-9 pr-3 text-xs outline-none placeholder:text-white/25 focus:border-violet-400/40"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-white px-4 text-xs font-medium text-black transition hover:bg-white/85"
              >
                Search
              </button>
            </form>

            <select
              value={status}
              onChange={(event) => {
                setStatus(event.target.value);
                setPage(1);
              }}
              aria-label="Filter by status"
              className="h-10 rounded-xl border border-white/[0.08] bg-[#111] px-3 text-xs text-white/75 outline-none focus:border-violet-400/40"
            >
              <option value="all">All statuses</option>
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {loading ? (
            <div className="flex min-h-64 items-center justify-center gap-3 text-sm text-white/40">
              <LoaderCircle size={18} className="animate-spin" />
              Loading prayer requests...
            </div>
          ) : requests.length === 0 ? (
            <div className="flex min-h-64 flex-col items-center justify-center px-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                <MessageCircleHeart size={20} className="text-white/35" />
              </div>
              <h2 className="text-sm font-medium">No prayer requests found</h2>
              <p className="mt-2 max-w-sm text-xs leading-5 text-white/35">
                New submissions will appear here. Try changing your search or
                status filter if you expected to see a request.
              </p>
            </div>
          ) : (
            <>
              <div className="divide-y divide-white/[0.06]">
                {requests.map((item) => (
                  <article
                    key={item.id}
                    className={`flex flex-col gap-4 p-4 transition hover:bg-white/[0.025] sm:flex-row sm:items-center sm:justify-between sm:px-5 ${
                      !item.isRead ? "bg-violet-400/[0.025]" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => openRequest(item)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-sm ${
                            item.isRead
                              ? "font-medium text-white/75"
                              : "font-semibold text-white"
                          }`}
                        >
                          {item.firstName} {item.lastName}
                        </span>

                        {!item.isRead && (
                          <span className="rounded-full bg-violet-300/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-violet-200">
                            New
                          </span>
                        )}

                        <StatusBadge status={item.status} />
                      </div>

                      <p className="mt-1 text-xs text-white/40">{item.email}</p>

                      <p className="mt-2 line-clamp-2 max-w-3xl whitespace-pre-wrap text-xs leading-5 text-white/55">
                        {item.request}
                      </p>

                      <p className="mt-2 text-[10px] text-white/30">
                        Received {formatDate(item.createdAt)}
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => openRequest(item)}
                      className="inline-flex h-9 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-white/[0.09] px-3 text-xs text-white/65 transition hover:bg-white/[0.06] sm:self-center"
                    >
                      <Eye size={14} />
                      View request
                    </button>
                  </article>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-white/[0.07] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <p className="text-[11px] text-white/35">
                  {total} {total === 1 ? "request" : "requests"} found · Page{" "}
                  {page} of {totalPages}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={page <= 1}
                    onClick={() => setPage((current) => current - 1)}
                    className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-white/65 disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    <ArrowLeft size={13} />
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={page >= totalPages}
                    onClick={() => setPage((current) => current + 1)}
                    className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-white/65 disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    Next
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </>
          )}
        </section>

        <p className="mt-5 flex items-start gap-2 text-[10px] leading-5 text-white/25">
          <ShieldCheck size={13} className="mt-0.5 shrink-0" />
          Prayer requests and contact details are private ministry information.
          Handle every submission with discretion.
        </p>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="prayer-request-title"
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#101010] shadow-2xl sm:rounded-3xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-white/[0.08] bg-[#101010]/95 px-5 py-4 backdrop-blur sm:px-7">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-violet-200/60">
                  Prayer request details
                </p>
                <h2
                  id="prayer-request-title"
                  className="mt-1 text-lg font-medium"
                >
                  {selected.firstName} {selected.lastName}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close request details"
                className="rounded-lg p-2 text-white/50 hover:bg-white/[0.06] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-6 p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={selected.status} />
                <span className="text-[11px] text-white/35">
                  Received {formatDate(selected.createdAt)}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${selected.email}`}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.08] p-3 transition hover:bg-white/[0.04]"
                >
                  <Mail size={16} className="shrink-0 text-white/40" />
                  <span className="min-w-0">
                    <span className="block text-[10px] text-white/35">
                      Email address
                    </span>
                    <span className="mt-1 block break-all text-xs text-white/80">
                      {selected.email}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${selected.phone}`}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.08] p-3 transition hover:bg-white/[0.04]"
                >
                  <Phone size={16} className="shrink-0 text-white/40" />
                  <span className="min-w-0">
                    <span className="block text-[10px] text-white/35">
                      Phone number
                    </span>
                    <span className="mt-1 block break-all text-xs text-white/80">
                      {selected.phone}
                    </span>
                  </span>
                </a>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-medium text-white/65">
                  Prayer request
                </h3>
                <div className="whitespace-pre-wrap break-words rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-sm leading-7 text-white/80">
                  {selected.request}
                </div>
              </div>

              <div>
                <label
                  htmlFor="request-status"
                  className="mb-2 block text-xs font-medium text-white/65"
                >
                  Update request status
                </label>

                <select
                  id="request-status"
                  value={selected.status}
                  disabled={updating}
                  onChange={(event) =>
                    updateRequest(selected.id, { status: event.target.value })
                  }
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#080808] px-3 text-sm outline-none focus:border-violet-400/40 disabled:opacity-50"
                >
                  {STATUS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  disabled={updating}
                  onClick={() =>
                    updateRequest(selected.id, { isRead: !selected.isRead })
                  }
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 text-xs text-white/70 hover:bg-white/[0.05] disabled:opacity-50"
                >
                  {selected.isRead ? (
                    <>
                      <EyeOff size={14} />
                      Mark unread
                    </>
                  ) : (
                    <>
                      <CheckCheck size={14} />
                      Mark as read
                    </>
                  )}
                </button>

                <button
                  type="button"
                  disabled={updating}
                  onClick={() => setDeleteTarget(selected)}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-red-400/20 px-4 text-xs text-red-300 transition hover:bg-red-400/[0.08] disabled:opacity-50"
                >
                  <Trash2 size={14} />
                  Delete request
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm">
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-prayer-title"
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/[0.08] text-red-300">
              <Trash2 size={18} />
            </div>

            <h2 id="delete-prayer-title" className="text-lg font-medium">
              Delete prayer request?
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/45">
              This permanently deletes the request from the database. This
              action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={updating}
                onClick={() => setDeleteTarget(null)}
                className="h-10 rounded-xl border border-white/10 px-4 text-xs text-white/65 hover:bg-white/[0.05]"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={updating}
                onClick={deleteRequest}
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-red-500 px-4 text-xs font-medium text-white hover:bg-red-400 disabled:opacity-50"
              >
                {updating && (
                  <LoaderCircle size={14} className="animate-spin" />
                )}
                Delete permanently
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
