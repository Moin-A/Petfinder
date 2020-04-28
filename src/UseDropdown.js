import React, { useState } from "react";

const UseDropdown = (label, defaultstate, options) => {
  const [state, setstate] = useState(defaultstate);
  let id = `Use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(event) => setstate(event.target.value)}
        onBlur={(event) => setstate(event.target.value)}
      >
        <option>All</option>

        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setstate];
};

export default UseDropdown;

// import React, { useState } from "react";

// const useDropdown = (label, defaultState, options) => {
//   const [state, updateState] = useState(defaultState);
//   const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
//   const Dropdown = () => (
//     <label htmlFor={id}>
//       {label}
//       <select
//         id={id}
//         value={state}
//         onChange={(e) => updateState(e.target.value)}
//         onBlur={(e) => updateState(e.target.value)}
//         disabled={!options.length}
//       >
//         <option />
//         {options.map((item) => (
//           <option key={item} value={item}>
//             {item}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
//   return [state, Dropdown, updateState];
// };

// export default useDropdown;
