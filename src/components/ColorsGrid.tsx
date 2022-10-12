import { getContrast } from "polished";
import { colors } from "../styles/tokens";

const Color = ({ name, color }: { name: string; color: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
          color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF",
        }}
      >
        <strong>${name}</strong>
        <span>{color}</span>
      </div>
    </div>
  );
};

export function ColorsGrid() {
  return Object.entries(colors).map(([name, color]) => {
    if (typeof color === "string") {
      return <Color name={name} color={color} />;
    }

    return Object.entries(color).map(([cName, color]) => {
      return (
        <Color
          key={`${name}-${cName}-${color}`}
          name={`${name}-${cName}`}
          color={color}
        />
      );
    });
  });
}
