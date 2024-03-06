export default function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>bill value</label>
      <input type="text" />

      <label>Your expence</label>
      <input type="text" />

      <label>{selectedFriend.name} expence</label>
      <input type="text" disabled />

      <label>who is paying the bill</label>
      <select>
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
    </form>
  );
}
