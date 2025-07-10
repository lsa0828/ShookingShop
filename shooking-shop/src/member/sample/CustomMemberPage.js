function CustomMemberPage({ children }) {
  return (
    <div className="flex justify-center mt-16">
      <div className="mx-6 480:mx-2 w-[480px] 480:w-full">
        {children}
      </div>
    </div>
  );
}

export default CustomMemberPage;