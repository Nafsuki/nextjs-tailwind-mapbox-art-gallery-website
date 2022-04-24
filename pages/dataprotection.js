import { Secondary as Layout } from "../layouts";
import text from "../config/dataprotection.json";

const DataPrivacy = () => {
  const { dataProtection } = text;
  return (
    <Layout>
      <main className="text-left bg-almostBlack text-white px-8 py-10 md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
        <h3 className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer">
          {dataProtection.title}
        </h3>
        <div className="flex flex-col">
          {Object.keys(dataProtection.content).map((item, key) => (
            <p key={`item-${key}`}>
              <span className="font-bold">{dataProtection.content[key]}</span>
              <br />
              <br />
            </p>
            ))}
          </div>
      </main>
    </Layout>
  )
}

export default DataPrivacy;