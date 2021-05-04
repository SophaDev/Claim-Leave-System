import { useState } from 'react';

function useToggle() {
  const [open, setOpen] = useState(false);

  function onToggle(open: any) {
    setOpen(!open);
  }
  return { onToggle, open };
}
export default useToggle;
