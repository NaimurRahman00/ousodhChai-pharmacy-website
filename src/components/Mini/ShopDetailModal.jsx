
const ShopDetailModal = ({
  openShopDetailModal,
  setOpenShopDetailModal
}) => {

  return (
    <div className="mx-auto flex w-2/3 items-center justify-center">
      <div
        onClick={() => setOpenShopDetailModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openShopDetailModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-2/5 rounded-2xl bg-[#dcdcdc] p-8 drop-shadow-2xl ${
            openShopDetailModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailModal;
