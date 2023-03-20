import Posts from '@/components/Posts';
import TopicSidebar from '@/components/topic_sidebar';

export default function Main(props: any) {
  const { topic } = props || {};
  return (
    <div>
      <div className="flex">
        <div className="h-screen w-full max-w-[220px] bg-[#0A0F19] p-3">
          <TopicSidebar topic={topic} />
        </div>
        <div className="h-screen w-full overflow-y-scroll">
          {/* Header */}
          <div className="py-2 px-3">Showing your search result?</div>
          {/* Content */}
          <div className="py-3 px-2">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
}
