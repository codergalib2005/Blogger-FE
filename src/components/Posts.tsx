import Post from './post';

export default function Posts() {
  return (
    <div className="grid grid-cols-1 gap-3  md:grid-cols-3">
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ].map((item, index) => (
        <Post key={index} item={item} />
      ))}
    </div>
  );
}
