export default function ProjectInfo() {
  return (
    <div className="text-[#2B4C6F] font-body px-2 sm:px-6">
      {/* <h2 className="text-4xl font-bold mb-3 text-center text-[#407BBA] font-heading tracking-tight">
        SwadSathi
      </h2> */}

      <p className="text-lg tracking-tight bg-white/60 font-medium backdrop-blur-md rounded-xl p-4">
        A real-time food ordering app built to reduce long queues and wait times
        in the college canteen. Students can place and track orders live, while
        canteen staff manage them efficiently.
      </p>

      <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
        <div className="bg-white/50 backdrop-blur-lg p-3 rounded-xl">
          <ul className="list-inside list-none tracking-tight space-y-1">
            <li>React + Tailwind</li>
            <li>Socket.io</li>
            <li>Node.js + MongoDB</li>
          </ul>
        </div>

        <div className="bg-white/50 backdrop-blur-lg p-3 rounded-xl">
          <ul className="list-inside list-none tracking-tight space-y-1">
            <li>Live order tracking</li>
            <li>Admin dashboard</li>
            <li>Mobile-first UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
