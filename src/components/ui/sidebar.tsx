import { createContext, useContext, useState, ReactNode } from "react";

const SidebarContext = createContext({ isOpen: true, toggle: () => {} });

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function SidebarTrigger() {
  const { toggle } = useContext(SidebarContext);
  return <button onClick={toggle}>Toggle Sidebar</button>;
}