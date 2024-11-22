interface Params {
  id: string;
}

const TranformationsPage = ({ params: { id } }: { params: Params }) => {
  console.log(id);
  return <div>tranformations</div>;
};

export default TranformationsPage;
