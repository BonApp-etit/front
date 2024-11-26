export default function DescriptionBox() {
  return (
    <div class="mb-4">
      <label for="descripcion" class="block text-sm font-medium text-cstext">
        Descripción
      </label>
      <textarea
        id="descripcion"
        name="descripcion"
        rows="4"
        class="mt-1 block w-full rounded-md border border-cs400 p-2 font-poppins text-black placeholder:text-black/50 focus-within:border-transparent focus:outline-none focus:ring-2 focus:ring-cs500"
      ></textarea>
    </div>
  );
}
