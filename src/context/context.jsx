import React, { useMemo } from "react";

const PokeContext = React.createContext();

export function PokeProvider(props) {
  const value = useMemo(() => {
    return {};
  }, []);

  return <PokeContext.Provider value={value} {...props} />;
}

export function usePoke() {
  const context = React.useContext(PokeContext);
  if (!context) {
    throw new Error("usePoke no esta en pokeContext");
  }
  return context;
}
