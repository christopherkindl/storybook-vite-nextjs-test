import React from "react";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <section className="p-10">
      <h2 className="text-blue-900 text-2xl">
        This is a test to see whether Tailwind works
      </h2>
    </section>
  );
};
