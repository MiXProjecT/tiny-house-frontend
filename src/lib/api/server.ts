interface Body<TVariables> {
  query: string;
  variables?: TVariables;
}

interface Error {
  message: string;
}

const server = {
  fetch: async <TData, TVariables = never>(
    body: Body<TVariables>
  ): Promise<{ data: TData; errors: Error[] }> => {
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch from server!");
    }

    return res.json();
  },
};

export default server;
