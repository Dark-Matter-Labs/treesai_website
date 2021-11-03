export const unclusteredPointLayer = {
  id: "trees",
  type: "circle",
  source: "trees",
  filter: ["!", ["has", "point_count"]],
  paint: {
    "circle-color": "#047857",
    "circle-radius": 5,
    "circle-stroke-width": 1,
    "circle-stroke-color": "#fff",
  },
};
