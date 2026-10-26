"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCheck,
  Eye,
  EyeOff,
  LoaderCircle,
  Mail,
  MessageSquareQuote,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
  X,
  Globe2,
  UserRound,
} from "lucide-react";

const STATUSES = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

const STATUS_STYLES = {
  pending: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  approved: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  rejected: "border-red-400/20 bg-red-400/10 text-red-200",
};

function formatDate(value) {
  if (!value) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function StatusBadge({ status }) {
  const label = STATUSES.find((item) => item.value === status)?.label || status;

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium ${
        STATUS_STYLES[status] || ""
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

export default function TestimoniesPage() {
  const [testimonies, setTestimonies] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
    unread: 0,
  });

  const [selected, setSelected] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadTestimonies = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        page: String(page),
        q: search,
        status,
      });

      const response = await fetch(
        `/api/admin/testimonies?${params.toString()}`,
        { cache: "no-store" },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load testimonies.");
      }

      const items = data.testimonies || [];

      setTestimonies(items);
      setStats(data.stats || {});
      setTotal(data.pagination?.total || 0);
      setTotalPages(data.pagination?.totalPages || 1);

      setSelected((current) => {
        if (!current) return null;
        return items.find((item) => item.id === current.id) || null;
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, [page, search, status]);

  useEffect(() => {
    loadTestimonies();
  }, [loadTestimonies]);

  async function updateTestimony(id, updates) {
    setUpdating(true);
    setError("");
    setNotice("");

    try {
      const response = await fetch(`/api/admin/testimonies/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to update testimony.");
      }

      setSelected(data.testimony);
      setNotice(data.message || "Testimony updated.");
      await loadTestimonies();
    } catch (err) {
      setError(err.message || "Unable to update testimony.");
    } finally {
      setUpdating(false);
    }
  }

  async function openTestimony(item) {
    setSelected(item);
    setError("");
    setNotice("");

    if (!item.isRead) {
      await updateTestimony(item.id, { isRead: true });
    }
  }

  async function deleteTestimony() {
    if (!deleteTarget) return;

    setUpdating(true);
    setError("");
    setNotice("");

    try {
      const response = await fetch(
        `/api/admin/testimonies/${deleteTarget.id}`,
        { method: "DELETE" },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to delete testimony.");
      }

      setSelected((current) =>
        current?.id === deleteTarget.id ? null : current,
      );
      setDeleteTarget(null);
      setNotice("Testimony deleted.");
      await loadTestimonies();
    } catch (err) {
      setError(err.message || "Unable to delete testimony.");
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
              <MessageSquareQuote size={17} />
              <span className="text-[10px] font-medium uppercase tracking-[0.24em]">
                Stories of faith
              </span>
            </div>

            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Testimonies
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
              Review submitted testimonies and manage their approval status
              before publication.
            </p>
          </div>

          <button
            type="button"
            onClick={loadTestimonies}
            disabled={loading}
            className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.04] px-4 text-xs text-white/70 transition hover:bg-white/[0.08] disabled:opacity-50 sm:self-auto"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Refresh inbox
          </button>
        </header>

        <section className="mb-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            label="All testimonies"
            value={stats.total ?? 0}
            icon={MessageSquareQuote}
            detail="Total submissions"
          />
          <StatCard
            label="Pending review"
            value={stats.pending ?? 0}
            icon={Eye}
            detail="Awaiting a decision"
          />
          <StatCard
            label="Approved"
            value={stats.approved ?? 0}
            icon={CheckCheck}
            detail="Approved for publication"
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
            <form onSubmit={submitSearch} className="flex min-w-0 flex-1 gap-2">
              <div className="relative min-w-0 flex-1 sm:max-w-md">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search title, name, country or story..."
                  aria-label="Search testimonies"
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
              {STATUSES.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {loading ? (
            <div className="flex min-h-64 items-center justify-center gap-3 text-sm text-white/40">
              <LoaderCircle size={18} className="animate-spin" />
              Loading testimonies...
            </div>
          ) : testimonies.length === 0 ? (
            <div className="flex min-h-64 flex-col items-center justify-center px-6 text-center">
              <MessageSquareQuote size={25} className="mb-4 text-white/30" />
              <h2 className="text-sm font-medium">No testimonies found</h2>
              <p className="mt-2 max-w-sm text-xs leading-5 text-white/35">
                Submitted testimonies will appear here. Try changing the search
                or status filter if you expected a result.
              </p>
            </div>
          ) : (
            <>
              <div className="divide-y divide-white/[0.06]">
                {testimonies.map((item) => (
                  <article
                    key={item.id}
                    className={`flex flex-col gap-4 p-4 transition hover:bg-white/[0.025] sm:flex-row sm:items-center sm:justify-between sm:px-5 ${
                      !item.isRead ? "bg-violet-400/[0.025]" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => openTestimony(item)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-white/85">
                          {item.title}
                        </span>

                        {!item.isRead && (
                          <span className="rounded-full bg-violet-300/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-violet-200">
                            New
                          </span>
                        )}

                        <StatusBadge status={item.status} />

                        {item.isAnonymous && (
                          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] text-white/50">
                            Anonymous for publication
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-xs text-white/40">
                        {item.firstName} {item.lastName}
                        {item.country ? ` · ${item.country}` : ""}
                        {" · "}
                        {item.category}
                      </p>

                      <p className="mt-2 line-clamp-2 max-w-3xl whitespace-pre-wrap text-xs leading-5 text-white/55">
                        {item.testimony}
                      </p>

                      <p className="mt-2 text-[10px] text-white/30">
                        Received {formatDate(item.createdAt)}
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => openTestimony(item)}
                      className="inline-flex h-9 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-white/[0.09] px-3 text-xs text-white/65 transition hover:bg-white/[0.06] sm:self-center"
                    >
                      <Eye size={14} />
                      Review
                    </button>
                  </article>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-white/[0.07] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <p className="text-[11px] text-white/35">
                  {total} {total === 1 ? "testimony" : "testimonies"} · Page{" "}
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
          Review publication consent and anonymity preferences before using any
          testimony in public ministry content.
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
            aria-labelledby="testimony-detail-title"
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#101010] shadow-2xl sm:rounded-3xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-white/[0.08] bg-[#101010]/95 px-5 py-4 backdrop-blur sm:px-7">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-violet-200/60">
                  Testimony review
                </p>
                <h2
                  id="testimony-detail-title"
                  className="mt-1 truncate text-lg font-medium"
                >
                  {selected.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close testimony details"
                className="ml-3 rounded-lg p-2 text-white/50 hover:bg-white/[0.06] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-6 p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={selected.status} />
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/50">
                  {selected.category}
                </span>
                <span className="text-[11px] text-white/35">
                  Received {formatDate(selected.createdAt)}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex min-w-0 items-start gap-3 rounded-xl border border-white/[0.08] p-3">
                  <UserRound
                    size={16}
                    className="mt-1 shrink-0 text-white/40"
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] text-white/35">Contributor</p>
                    <p className="mt-1 break-words text-xs text-white/80">
                      {selected.firstName} {selected.lastName}
                    </p>
                    {selected.isAnonymous && (
                      <p className="mt-1 text-[10px] text-amber-200/80">
                        Name must not be shown publicly.
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-3 rounded-xl border border-white/[0.08] p-3">
                  <Globe2 size={16} className="mt-1 shrink-0 text-white/40" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-white/35">Country</p>
                    <p className="mt-1 break-words text-xs text-white/80">
                      {selected.country || "Not provided"}
                    </p>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-3 rounded-xl border border-white/[0.08] p-3 sm:col-span-2">
                  <Mail size={16} className="mt-1 shrink-0 text-white/40" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-white/35">Email address</p>
                    {selected.email ? (
                      <a
                        href={`mailto:${selected.email}`}
                        className="mt-1 block break-all text-xs text-white/80 hover:text-violet-200"
                      >
                        {selected.email}
                      </a>
                    ) : (
                      <p className="mt-1 text-xs text-white/45">Not provided</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-medium text-white/65">
                  Full testimony
                </h3>
                <div className="whitespace-pre-wrap break-words rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-sm leading-7 text-white/80">
                  {selected.testimony}
                </div>
              </div>

              <div
                className={`rounded-xl border p-4 ${
                  selected.publicationConsent
                    ? "border-emerald-400/15 bg-emerald-400/[0.04]"
                    : "border-red-400/20 bg-red-400/[0.04]"
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-medium">
                  <ShieldCheck size={15} />
                  Publication consent{" "}
                  {selected.publicationConsent ? "confirmed" : "not confirmed"}
                </div>
                <p className="mt-2 text-[11px] leading-5 text-white/45">
                  {selected.publicationConsent
                    ? "Consent is recorded. Confirm anonymity preferences and review the content before publishing."
                    : "Do not publish this testimony until valid consent has been obtained and recorded."}
                </p>
              </div>

              <div>
                <label
                  htmlFor="testimony-status"
                  className="mb-2 block text-xs font-medium text-white/65"
                >
                  Review decision
                </label>

                <select
                  id="testimony-status"
                  value={selected.status}
                  disabled={updating}
                  onChange={(event) =>
                    updateTestimony(selected.id, {
                      status: event.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#080808] px-3 text-sm outline-none focus:border-violet-400/40 disabled:opacity-50"
                >
                  {STATUSES.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>

                {!selected.publicationConsent && (
                  <p className="mt-2 text-[11px] text-red-300">
                    Publication consent is missing. Do not approve for
                    publication.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  disabled={updating}
                  onClick={() =>
                    updateTestimony(selected.id, {
                      isRead: !selected.isRead,
                    })
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

                <div className="flex flex-col gap-2 sm:flex-row">
                  {selected.status !== "approved" &&
                    selected.publicationConsent && (
                      <button
                        type="button"
                        disabled={updating}
                        onClick={() =>
                          updateTestimony(selected.id, {
                            status: "approved",
                          })
                        }
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-500/90 px-4 text-xs font-medium text-white hover:bg-emerald-400 disabled:opacity-50"
                      >
                        <Check size={14} />
                        Approve
                      </button>
                    )}

                  {selected.status !== "rejected" && (
                    <button
                      type="button"
                      disabled={updating}
                      onClick={() =>
                        updateTestimony(selected.id, {
                          status: "rejected",
                        })
                      }
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-red-400/20 px-4 text-xs text-red-300 hover:bg-red-400/[0.08] disabled:opacity-50"
                    >
                      <X size={14} />
                      Reject
                    </button>
                  )}

                  <button
                    type="button"
                    disabled={updating}
                    onClick={() => setDeleteTarget(selected)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 text-xs text-white/60 hover:bg-white/[0.05] disabled:opacity-50"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
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
            aria-labelledby="delete-testimony-title"
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/[0.08] text-red-300">
              <Trash2 size={18} />
            </div>

            <h2 id="delete-testimony-title" className="text-lg font-medium">
              Delete this testimony?
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/45">
              This permanently removes the submission from the database. This
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
                onClick={deleteTestimony}
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
