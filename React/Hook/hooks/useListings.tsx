import React from "react";

export default function useListings() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return data;
}
