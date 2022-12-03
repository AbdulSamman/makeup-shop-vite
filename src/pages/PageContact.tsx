import "../styles/pages/pageContact.scss";

export const PageContact = () => {
  return (
    <div className="pageContact">
      <form>
        <fieldset>
          <legend>
            <span>type of requests</span>
          </legend>

          <div>
            <div>
              <label>type of requests *</label>
            </div>
            <select>
              <option value="">- Choose -</option>
              <option value="">Beauty/Product Advice</option>
              <option value="">Voucher/trial request</option>
              <option value="">Inquiry about ingredients</option>
              <option value="">Product-Feedback</option>
              <option value="">Website-Problem</option>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
