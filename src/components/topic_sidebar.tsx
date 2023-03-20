import Selector from './Selector';

type TopicTypes = {
  topic: { title: string }[];
};

export default function TopicSidebar({ topic }: TopicTypes) {
  return (
    <div>
      <h3>Topic</h3>
      <p className="text-gray-600">Search Topic</p>
      <ul className="mt-4 flex flex-col gap-2">
        {topic.map((item, index) => (
          <Selector className="block" key={index} title={item.title} />
        ))}
      </ul>
    </div>
  );
}
