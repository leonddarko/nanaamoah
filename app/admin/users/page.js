"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  UserPlus,
  Users,
  Search,
  ShieldCheck,
  UserRound,
  Trash2,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  AlertCircle,
  LoaderCircle,
  Mail,
  CalendarDays,
  X,
} from "lucide-react";

function formatDate(date) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        page: String(page),
      });

      if (search) params.set("q", search);

      const response = await fetch(`/api/admin/users?${params}`, {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load users.");
      }

      setUsers(data.users);
      setPagination(data.pagination);
    } catch (err) {
      setError(err.message || "Unable to load users.");
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  function handleSearch(e) {
    e.preventDefault();
    setPage(1);
    setSearch(query.trim());
    setNotice("");
  }

  async function handleDelete() {
    if (!selectedUser || deleting) return;

    setDeleting(true);
    setError("");
    setNotice("");

    try {
      const response = await fetch(
        `/api/admin/users/${encodeURIComponent(selectedUser.id)}`,
        { method: "DELETE" },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to delete user.");
      }

      setNotice(data.message);
      setSelectedUser(null);

      // If the current page contained only one account, go back a page.
      if (users.length === 1 && page > 1) {
        setPage((current) => current - 1);
      } else {
        await loadUsers();
      }
    } catch (err) {
      setError(err.message || "Unable to delete user.");
      setSelectedUser(null);
    } finally {
      setDeleting(false);
    }
  }

  const adminCount = users.filter((user) => user.role === "admin").length;
  const regularCount = users.filter((user) => user.role === "user").length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-violet-300/70">
            Administration / Users
          </p>

          <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
            User management
          </h1>

          <p className="mt-2 text-sm leading-6 text-white/40">
            View accounts and manage access to the website.
          </p>
        </div>

        <Link
          href="/admin/users/new"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-xs font-semibold text-black transition hover:bg-white/90"
        >
          <UserPlus size={16} />
          Create administrator
        </Link>
      </section>

      {/* Summary cards */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Total accounts",
            value: pagination.total,
            icon: Users,
          },
          {
            label: "Admins on this page",
            value: adminCount,
            icon: ShieldCheck,
          },
          {
            label: "Users on this page",
            value: regularCount,
            icon: UserRound,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/45">{item.label}</p>
                <Icon size={17} className="text-white/35" />
              </div>

              <p className="mt-4 text-2xl font-medium tabular-nums">
                {loading ? "—" : item.value}
              </p>
            </div>
          );
        })}
      </section>

      {/* Users table */}
      <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
        <div className="flex flex-col gap-4 border-b border-white/[0.08] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-sm font-medium">All accounts</h2>
            <p className="mt-1 text-xs text-white/35">
              {pagination.total} account
              {pagination.total === 1 ? "" : "s"} found
            </p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative min-w-0 flex-1 sm:w-64">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name or email"
                aria-label="Search users by name or email"
                className="h-10 w-full rounded-xl border border-white/[0.09] bg-black/20 pl-9 pr-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-violet-400/40"
              />
            </div>

            <button
              type="submit"
              className="h-10 rounded-xl border border-white/10 px-3 text-xs text-white/70 transition hover:bg-white/[0.05]"
            >
              Search
            </button>

            <button
              type="button"
              onClick={loadUsers}
              disabled={loading}
              aria-label="Refresh users"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/55 transition hover:bg-white/[0.05] disabled:opacity-40"
            >
              <RefreshCw size={15} className={loading ? "animate-spin" : ""} />
            </button>
          </form>
        </div>

        {error && (
          <div
            role="alert"
            className="m-5 flex items-start gap-2 rounded-xl border border-red-400/15 bg-red-500/[0.06] p-3 text-xs leading-5 text-red-300"
          >
            <AlertCircle size={15} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {notice && (
          <div
            role="status"
            className="m-5 rounded-xl border border-emerald-400/15 bg-emerald-500/[0.06] p-3 text-xs text-emerald-300"
          >
            {notice}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="border-b border-white/[0.06] bg-white/[0.015]">
              <tr className="text-[10px] font-medium uppercase tracking-[0.13em] text-white/35">
                <th className="px-6 py-4">Account</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Date created</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/[0.055]">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-16 text-center">
                    <LoaderCircle
                      size={22}
                      className="mx-auto animate-spin text-white/40"
                    />
                    <p className="mt-3 text-xs text-white/40">
                      Loading accounts...
                    </p>
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-16 text-center">
                    <Users size={24} className="mx-auto text-white/25" />
                    <p className="mt-3 text-sm text-white/65">
                      No accounts found
                    </p>
                    <p className="mt-1 text-xs text-white/35">
                      Try another search or create an administrator.
                    </p>
                  </td>
                </tr>
              ) : (
                users.map((user) => {
                  const isAdmin = user.role === "admin";
                  const initials =
                    `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase() ||
                    "?";

                  return (
                    <tr
                      key={user.id}
                      className="transition hover:bg-white/[0.015]"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-[11px] font-medium text-white/70">
                            {initials}
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs font-medium text-white/85">
                              {user.firstName} {user.lastName}
                            </p>
                            <p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/40">
                              <Mail size={11} />
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                            isAdmin
                              ? "border-violet-400/15 bg-violet-500/[0.08] text-violet-200"
                              : "border-white/[0.08] bg-white/[0.03] text-white/55"
                          }`}
                        >
                          {isAdmin ? (
                            <ShieldCheck size={12} />
                          ) : (
                            <UserRound size={12} />
                          )}
                          {isAdmin ? "Administrator" : "User"}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-2 text-[11px] text-white/45">
                          <CalendarDays size={13} />
                          {formatDate(user.createdAt)}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedUser(user)}
                          aria-label={`Delete account for ${user.firstName} ${user.lastName}`}
                          className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] px-3 text-[11px] text-white/45 transition hover:border-red-400/20 hover:bg-red-500/[0.06] hover:text-red-300"
                        >
                          <Trash2 size={14} />
                          <span className="hidden sm:inline">Delete</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-3 border-t border-white/[0.08] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-[11px] text-white/35">
            Page {pagination.totalPages ? page : 0} of {pagination.totalPages}
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={loading || page <= 1}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/[0.09] px-3 text-[11px] text-white/60 transition hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-25"
            >
              <ChevronLeft size={14} />
              Previous
            </button>

            <button
              type="button"
              onClick={() =>
                setPage((current) =>
                  Math.min(pagination.totalPages, current + 1),
                )
              }
              disabled={
                loading ||
                page >= pagination.totalPages ||
                pagination.totalPages === 0
              }
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/[0.09] px-3 text-[11px] text-white/60 transition hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-25"
            >
              Next
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Delete confirmation */}
      {selectedUser && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !deleting) {
              setSelectedUser(null);
            }
          }}
        >
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-title"
            aria-describedby="delete-description"
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111113] p-6 shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/15 bg-red-500/[0.07]">
                <Trash2 size={19} className="text-red-300" />
              </div>

              <button
                type="button"
                onClick={() => setSelectedUser(null)}
                disabled={deleting}
                aria-label="Close dialog"
                className="rounded-lg p-2 text-white/40 hover:bg-white/[0.05] hover:text-white disabled:opacity-30"
              >
                <X size={17} />
              </button>
            </div>

            <h2 id="delete-title" className="text-lg font-medium">
              Delete this account?
            </h2>

            <p
              id="delete-description"
              className="mt-3 text-sm leading-6 text-white/45"
            >
              You are about to delete{" "}
              <span className="font-medium text-white/80">
                {selectedUser.firstName} {selectedUser.lastName}
              </span>{" "}
              ({selectedUser.email}). This action cannot be undone.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setSelectedUser(null)}
                disabled={deleting}
                className="h-10 rounded-xl border border-white/10 px-4 text-xs text-white/65 hover:bg-white/[0.04] disabled:opacity-40"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="flex h-10 items-center justify-center gap-2 rounded-xl bg-red-500 px-4 text-xs font-semibold text-white transition hover:bg-red-400 disabled:opacity-50"
              >
                {deleting && (
                  <LoaderCircle size={14} className="animate-spin" />
                )}
                {deleting ? "Deleting..." : "Delete account"}
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
