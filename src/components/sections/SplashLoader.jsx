import { EncryptedText } from "../ui/encrypted-text";

export default function SplashLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0A0A0A]">
      <p className="mx-auto max-w-lg text-center">
        <EncryptedText
          text="Welcome to Abhyaasi.com,Broh!"
          encryptedClassName="text-gray-300 dark:text-gray-700"
          revealedClassName="text-black dark:text-white"
          revealDelayMs={50} />
      </p>
    </div>
  );
}
