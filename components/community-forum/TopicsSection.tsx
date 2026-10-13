import { SectionShell, SectionTitle, TOPICS } from "./shared";

export default function TopicsSection() {
  return (
    <SectionShell className="border-b border-gray-200 bg-white" bgImage="topics-bg.webp">
      <SectionTitle>Browse Topics</SectionTitle>
      <p className="max-w-[768px] pt-4 text-base leading-7 text-gray-600 sm:text-lg">
        Select a registry-driven category to discover peer implementation patterns and workflows.
      </p>

      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((topic) => (
          <a
            key={topic.id}
            href="#discussions"
            className="flex flex-col rounded-xl bg-white p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline -outline-offset-1 outline-gray-200 transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-bold leading-7 text-gray-900">{topic.title}</h3>
            <p className="flex-1 pt-2 text-sm leading-5 text-gray-600">{topic.description}</p>
            <div className="flex items-center justify-between pt-4 text-xs font-semibold leading-4">
              <span className="text-gray-500">{topic.count} Discussions</span>
              <span className="text-orange-500">Browse →</span>
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
