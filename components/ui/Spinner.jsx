export default function Spinner({ label = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white">
      <div className="relative h-10 w-10">
        {/* outer ring */}
        <div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: "var(--fs-border)",
          }}
        />

        {/* spinning accent ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-t-2 animate-spin"
          style={{
            borderColor: "transparent",
            borderTopColor: "var(--fs-primary)",
          }}
        />

        {/* subtle inner circle */}
        <div
          className="absolute inset-2 rounded-full"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
          }}
        />
      </div>

      {label && (
        <p
          className="mt-3 text-sm"
          style={{ color: "var(--fs-text-muted)" }}
        >
          {label}
        </p>
      )}
    </div>
  );
}
