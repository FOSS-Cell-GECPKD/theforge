export default function Sponsors() {
  return (
    <section className="pb-10" id="sponsors">
      <div className="px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Win big with week 1!
        </h1>
        <p className="max-w-md mx-auto mb-12 text-lg text-gray-600 dark:text-gray-400 text-left md:text-center md:text-lg">
          The first week of THE FORGE is brought to you by IEDC GEC Palakkad along with FOSS Clubs GEC Palakkad!
        </p>
        <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-3">
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src="/images/clubs.png" alt="sponsor" className="h-10" />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src="/images/foss.png" alt="sponsor" className="h-16" />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src="/images/iedc.png" alt="sponsor" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
