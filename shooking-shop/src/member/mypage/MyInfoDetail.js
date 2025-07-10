function MyInfoDetail({ title, detail }) {
  return (
    <tr className="border border-black">
      <td className="border border-black bg-[#FFD700] max-w-full p-2">{title}</td>
      <td className="max-w-full p-2">{detail}</td>
    </tr>
  );
}

export default MyInfoDetail;