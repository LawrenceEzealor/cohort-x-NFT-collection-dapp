import { Flex } from "@radix-ui/themes";

export default function Header() {
  return (
    <div className="flex justify-between py-5 px-4 items-center border-b border-blue-500">
      <div className="text-pink-950 font-bold font-serif text-lg">Meta NFT</div>
      <Flex gap={"4"} align={"center"}>
        <w3m-button />
      </Flex>
    </div>
  );
}
