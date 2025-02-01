const TARGET = 'admin.product-details.action.should-render';

export default shopify.extend(TARGET, async () => {
  return {display: false};
});