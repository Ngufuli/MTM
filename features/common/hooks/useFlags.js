export  const useFlags = (flags) => {
    const flagUrl = `https://wise.com/public-resources/assets/flags/rectangle/${flags.toLowerCase()}.png`

    return {flagUrl};
}