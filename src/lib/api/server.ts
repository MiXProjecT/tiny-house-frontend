interface Body<TVariables> {
  query: string;
  variables?: TVariables;
}

const server = {
  fetch: async <TData = any, TVariables = any>(
    body: Body<TVariables>
  ): Promise<{ data: TData }> => {
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    return res.json();
  },
};

export default server;
