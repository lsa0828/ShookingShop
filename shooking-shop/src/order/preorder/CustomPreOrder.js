function CustomPreOrder({ title, children }) {
  return (
    <div className="mb-6 px-2 mx-auto max-w-full md:w-[560px] lg:w-[720px] xl:w-[1080px]">
      <p className="text-xl font-bold mb-2">{title}</p>
      <div className="border border-gray-300 rounded-lg p-4 flex justify-center">
        {children}
      </div>
    </div>
  );
}

export default CustomPreOrder;