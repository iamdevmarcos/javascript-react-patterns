import * as React from "react";
import "./style.css";
import Listings from "./components/container/Listings";
import useListings from "./hooks/useListings";

export default function App() {
  const data = useListings();
  if (!data) return null;

  return <Listings listings={data.listings} />;
}
