import "react-quill/dist/quill.snow.css";

const CustomToolBar = () => {
  return (
    <div id="toolbar">
      <select
        className="ql-header "
        defaultValue={""}
        onChange={(e) => e.persist()}
      >
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="">Normal</option>
      </select>
      <select className="ql-font">
        <option value="sailec-light">Sailec Light</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-link" />
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-image" />
      <button className="ql-code-block" />
      <button className="ql-formula" />
    </div>
  );
};

export default CustomToolBar;
