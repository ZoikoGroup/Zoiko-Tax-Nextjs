import { Check } from "lucide-react";
import { SectionShell, SectionTitle } from "./shared";

const DISCUSSIONS = [
  {
    topic: "Integration & APIs",
    badge: { label: "Solved (Community)", tone: "solved" },
    title: "Handling rate limits during bulk invoice uploads",
    excerpt:
      "Does anyone have a recommended pattern for pacing API requests when uploading historical invoice batches to avoid hitting the 429 limits?",
    author: "peer_dev_88",
    activity: "2 hours ago",
    replies: 12,
  },
  {
    topic: "Workflow Configurations",
    badge: { label: "Staff Participated", tone: "staff" },
    title: "Best practices for multi-tenant workspace separation",
    excerpt:
      "We manage multiple subsidiary entities. Is it better to separate them at the workspace level or use tags within a single environment?",
    author: "admin_sarah",
    activity: "1 day ago",
    replies: 5,
  },
];

export default function DiscussionsSection() {
  return (
    <SectionShell id="discussions" className="border-b border-gray-200 bg-purple-50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SectionTitle>Recent Discussions</SectionTitle>
        <div>
          <label htmlFor="forum-sort" className="sr-only">
            Sort discussions
          </label>
          <select
            id="forum-sort"
            defaultValue="newest"
            className="h-9 w-full rounded-lg bg-gray-50 px-4 text-sm text-gray-900 outline -outline-offset-1 outline-gray-300 sm:w-52"
          >
            <option value="newest">Sort by: Newest Activity</option>
            <option value="replies">Sort by: Most Replies</option>
            <option value="solved">Sort by: Solved First</option>
          </select>
        </div>
      </div>

      <ul className="flex flex-col gap-4 pt-8">
        {DISCUSSIONS.map((discussion) => (
          <li
            key={discussion.title}
            className="flex flex-col gap-4 rounded-xl bg-white p-5 outline -outline-offset-1 outline-gray-200 sm:flex-row sm:items-start sm:justify-between sm:p-6"
          >
            <div className="flex min-w-0 flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold leading-4 text-orange-500">
                  {discussion.topic}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold leading-4 ${
                    discussion.badge.tone === "solved" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {discussion.badge.tone === "solved" ? (
                    <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                  ) : null}
                  {discussion.badge.label}
                </span>
              </div>
              <h3 className="pt-2 text-lg font-bold leading-7 text-violet-950 sm:text-xl">{discussion.title}</h3>
              <p className="pt-2 text-sm leading-5 text-gray-600">{discussion.excerpt}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs font-medium leading-4 text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <span aria-hidden="true" className="size-5 rounded-full bg-gray-200" />
                  {discussion.author}
                </span>
                <span>Last activity: {discussion.activity}</span>
              </div>
            </div>
            <span className="shrink-0 self-start rounded-lg bg-gray-50 px-3 py-1.5 text-sm leading-5 text-gray-500 outline -outline-offset-1 outline-gray-100">
              {discussion.replies} Replies
            </span>
          </li>
        ))}
      </ul>

      <a href="#discussions" className="inline-block pt-8 text-base font-semibold leading-6 text-orange-500 hover:underline">
        View more discussions →
      </a>
    </SectionShell>
  );
}
