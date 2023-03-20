import Main from '@/layouts/Main';

const Index = (props: any) => {
  console.log(props);
  return (
    <div>
      {/* <Header title="Header" /> */}
      {/* Main Box */}
      <Main {...props}></Main>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/topic');
  const data = await res.json();

  return { props: data };
}

export default Index;
