export default function ResumePage() {
  return (
    <div className="flex flex-1 flex-col p-[1rem] lg:pl-[7rem]">
      <iframe
        className="flex flex-1 rounded-xl border border-divider"
        src={`${import.meta.env.BASE_URL}resume.pdf`}
      ></iframe>
    </div>
  );
}
