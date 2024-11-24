# DevFest Break Screen

This project was created for DevFest to help attendees track the remaining break time between talks. It was displayed on a projector during breaks for easy tracking time.

The homepage provides quick access to 10 and 40-minute timers, but you can customize the timer duration by modifying the URL. Additionally, the bottom of the page features the event's QR code and a display for speaker names.

[Demo Link](https://devfest-break.vercel.app/sayac/10)

## Features

- **Quick Timers**: Start a 10- or 40-minute timer instantly from the homepage.
- **Custom Timer**: Set a custom timer duration by editing the URL (e.g., `/timer/15` for 15 minutes).
- **Event Details**: Display the event's QR code for easy scanning.
- **Speaker Names**: Show speakers names at the bottom of the page.

Built with **Next.js**, **shadcn/ui**, **Magic UI** and **Tailwind CSS**, this project is both functional and visually appealing.

## Getting Started

To get started with the project, you need to run the development server. You can do this using one of the following commands, depending on your package manager of choice:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

You can edit speaker names in `assets/speakers.json` and update qr code at `assets/qrcode.svg`.

## Notes

Feel free to use this project in your own events as you see fit. Please note that it was written in a rush during the final hours to meet the deadline, so it might be a bit amateurish and buggy. If you'd like to improve it, don't hesitate to open a pull request!
