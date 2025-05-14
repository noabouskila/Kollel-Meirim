// components/footer.tsx
export function Footer() {
    return (
      <footer className=" bg-blue-100 text-center p-4  bottom-0 w-full shadow ">
        <p>&copy; {new Date().getFullYear()} Kollel Meïirim - Tous droits réservés</p>
      </footer>
    );
}