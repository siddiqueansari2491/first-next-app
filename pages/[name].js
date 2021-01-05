import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <h1> Welcome {name}</h1>
    </div>
  );
};

export default Name;
