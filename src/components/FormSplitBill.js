export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with x</h2>

      <label>bill value</label>
      <input type="text" />

      <label>Your expence</label>
      <input type="text" />

      <label>x's expence</label>
      <input type="text" disabled />

      <label>who is paying the bill</label>
      <select>
        <option value="friend">x</option>
        <option value="user">you</option>
      </select>
    </form>
  );
}
