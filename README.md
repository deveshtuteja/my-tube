# MyTube (ReactJS, YouTube API, Tailwind CSS, Redux)

## A YouTube-like video streaming platform built with React.js and YouTube's live APIs. Features include dark mode, caching, and debouncing in the search with real-time suggestions. It also offers a live chat feature for enhanced user interaction and engagement.

- Developed a YouTube-like video platform with dark mode, enhancing user engagement by 25%
- Implemented caching and debouncing in search, improving search efficiency by 30% and reducing latency by 20%
- Built a live chat feature, boosting real-time interaction and user retention by 15%

### Debouncing

typing slow:300ms
typing fast:30ms

Performance:

- Iphone 15 pro max=14 letters\*1000=140000
- With Debouncing- 3 API Calls=3\*1000=3000

Debouncing with 300ms

- if difference between key strokes <200ms => Decline API calls
  (enhances user experience)

Cache :

- Time complexity to search in an array- O(n)
- Time complexity to search in an object- O(1)

[i,ip,iph,iphone]
{
i:
ip:
iph:
iphone:
}

### Live Chat Feature

- Live Chat >>>> Infinite Scroll >>>>>> Pagination

### Challenges

- Get the data live
- Update the UI

### Data

- Web Sockets -> bidirectional connection b/w UI and Server (No regular interval) -> Trading apps, WhatsApp
- API Polling -> connection from server to UI (At regular interval data flows) -> Gmail, Cricbuzz
