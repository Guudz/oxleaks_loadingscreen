Config = {}; // Don't touch

Config.ServerIP = "localhost:30120";

// Social media buttons on the left side
Config.Socials = [
    {name: "discord", label: "Discord", description: "Tritt unserer community bei!", icon: "assets/media/icons/discord.png", link: "https://discord.gg/dinero"},
    {name: "tiktok", label: "Tiktok", description: "Sehen Sie sich hier unsere Videos an!", icon: "assets/media/icons/tiktok.png", link: "https://tiktok.com"},
    {name: "tebex", label: "Tebex", description: "Kaufen Sie unsere Produkte hier!", icon: "assets/media/icons/tebex.png", link: "https://dinero-vip.tebex.io"},
];

Config.HideoverlayKeybind = 112 // JS key code https://keycode.info
Config.CustomBindText = "F1"; // leave as "" if you don't want the bind text in html to be statically set

// Staff list
Config.Staff = [
    {name: "DD.-", description: "Projektleitung", color: "#fff", image: "https://cdn.discordapp.com/attachments/945854078020370462/954042338857066566/Dinero_logo.gif"},
    {name: "KK.-", description: "Stv.Projektleitung", color: "#0195FD", image: "https://cdn.discordapp.com/attachments/945854078020370462/954042338857066566/Dinero_logo.gif"},
    {name: "AnDiex", description: "Manager", color: "#fff", image: "https://cdn.discordapp.com/attachments/945854078020370462/954042338857066566/Dinero_logo.gif"},


];

// Categories
Config.Categories = [
    {label: "Social Media", default: true},
    {label: "Staff", default: false}
];

// Music
Config.Song = "song.mp3";