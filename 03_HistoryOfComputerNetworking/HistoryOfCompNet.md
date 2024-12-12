# Full Stack Engineering - Lecture 3: Networking and Internet Fundamentals

1. [History of the Internet](#history-of-the-internet)
2. [IP Address](#ip-address)
3. [Client-Server Model](#client-server-model)
4. [Protocols](#protocols)
5. [Protocol Stack](#protocol-stack)
6. [Networking Devices and Components (Homework)](#networking-devices-and-components-homework)

---

## 1. **History of the Internet**  
![](/images/hisofnetworking.jpg)
   - **1960s**: The idea of packet-switching, ARPANET (the precursor to the internet).
   - **1970s**: Development of TCP/IP by Vint Cerf and Bob Kahn.
   - **1980s**: The expansion of the ARPANET and introduction of the Domain Name System (DNS).
   - **1990s**: The rise of the World Wide Web, web browsers, and the commercialization of the internet.
   - **2000s**: Broadband and wireless internet became widely available, leading to the growth of social media, cloud computing, and e-commerce.
   - **Today**: The internet is a global network connecting billions of devices and enabling technologies like IoT, AI, and 5G.

---

## 2. **IP Address**  
   - **Definition**: A unique numerical label assigned to each device connected to a network.
   - **IPv4 vs. IPv6**: IPv4 uses 32-bit addresses, whereas IPv6 uses 128-bit addresses to accommodate the growing number of devices.
   - **Public vs. Private IPs**: Public IPs are routable on the internet, while private IPs are used within local networks.

---

## 3. **Client-Server Model**  
   - **Client**: A device (e.g., a computer or smartphone) that requests data or services from a server.
   - **Server**: A system that provides data or services to clients over the network.
   - **Communication**: Clients send requests to servers using protocols, and servers send responses back to clients.

---

## 4. **Protocols**  
Sets of Rules to send Data
   - **HTTP (HyperText Transfer Protocol)**: The protocol used to transfer web pages on the internet.
   - **SMTP (Simple Mail Transfer Protocol)**: A protocol used to send emails between servers.
   - **FTP (File Transfer Protocol)**: A standard network protocol used to transfer files between a client and a server.

---

## 5. **Protocol Stack**  
   - The concept of layering protocols to enable communication between devices. Examples include:
     - **Application Layer**: HTTP, SMTP, FTP
     - **Transport Layer**: TCP (Transmission Control Protocol)
     - **Internet Layer**: IP (Internet Protocol)
     - **Link Layer**: Ethernet, Wi-Fi

---

## 6. **Networking Devices and Components (Homework)**

   - **Hub**: A basic networking device that broadcasts data to all connected devices in a network. It operates at the physical layer of the OSI model and doesn’t differentiate between devices. This can cause network congestion and security issues, as all data is sent to all devices, even if it is meant for just one.

   - **Switch**: A more intelligent device than a hub, operating at the data link layer. A switch can learn the MAC addresses of devices on a network and forward data to the correct device instead of broadcasting it. This reduces network congestion and improves security, as data is sent only to the intended device.

   - **Router**: A device that routes data between different networks, such as between a local area network (LAN) and the internet. Routers operate at the network layer and use IP addresses to determine the best path for data to travel. They also perform network address translation (NAT) to allow multiple devices within a private network to share a single public IP address.

   - **Modem**: A device that modulates and demodulates signals for internet connectivity. Modems convert digital data from a computer into analog signals for transmission over telephone lines or cable, and vice versa. There are different types of modems, including dial-up modems, cable modems, and DSL modems, which vary in speed and technology.

   # Router vs Modem: Comparison

| Feature                | **Modem**                                              | **Router**                                               |
|------------------------|--------------------------------------------------------|----------------------------------------------------------|
| **Main Purpose**        | Connects your home to the internet.                   | Distributes the internet connection to multiple devices. |
| **Function**            | Converts ISP signals into usable data for your devices. | Routes data between the modem and devices in your home.  |
| **Connection Type**     | Directly connects to your ISP (Internet Service Provider). | Connects to the modem and shares the internet within your network. |
| **Local Network**       | Does not create a local network.                       | Creates and manages the local network (wired and wireless). |
| **Internet Sharing**    | Only one device can connect to the internet at a time. | Multiple devices can connect and share the internet.    |
| **Example**             | A cable or DSL modem bringing the internet into your home. | A Wi-Fi router that connects multiple devices (e.g., laptops, phones) to the internet. |

---


   

   - **Layers**: In networking, layers refer to the different levels of protocol functionality that work together to enable communication. The OSI (Open Systems Interconnection) model and TCP/IP model are the two most widely used reference models. Each layer is responsible for specific tasks, such as data transmission, error checking, and addressing, ensuring that communication is reliable and efficient.
   ![](/images/OSI-Model-1024x642.webp)

   - **TCP/IP**: The suite of communication protocols that governs the internet. TCP (Transmission Control Protocol) ensures reliable data transmission by establishing a connection between sender and receiver and ensuring that data is received correctly. IP (Internet Protocol) handles addressing and routing, ensuring that data packets reach the correct destination. Together, TCP and IP form the foundation of internet communication.

---
