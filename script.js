<script>
    const matches = [
        {
            name: "مباراة جنوة ضد فيورنتينا",
            description: "شاهد مباراة جنوة ضد فيورنتينا مباشرة بجودة عالية.",
            startDate: "2024-10-30T17:30",
            location: { name: "Stadio Luigi Ferraris", city: "جنوة", country: "IT" },
            teams: ["جنوة", "فيورنتينا"]
        },
        {
            name: "مباراة الاتحاد ضد الاهلي",
            description: "شاهد مباراة الاتحاد ضد الاهلي مباشرة بجودة عالية.",
            startDate: "2024-10-30T18:00",
            location: { name: "King Abdullah Sports City", city: "جدة", country: "SA" },
            teams: ["الاتحاد", "الاهلي"]
        },
        // المباريات الجديدة المضافة
        {
            name: "مباراة كلوب بروج ضد أستون فيلا",
            description: "شاهد مباراة كلوب بروج ضد أستون فيلا مباشرة بجودة عالية.",
            startDate: "2024-11-02T17:45",
            location: { name: "Jan Breydel Stadium", city: "بروج", country: "BE" },
            teams: ["كلوب بروج", "أستون فيلا"]
        },
        {
            name: "مباراة شاختار دونيتسك ضد يانج بويز",
            description: "شاهد مباراة شاختار دونيتسك ضد يانج بويز مباشرة بجودة عالية.",
            startDate: "2024-11-02T17:45",
            location: { name: "Donbass Arena", city: "دونيتسك", country: "UA" },
            teams: ["شاختار دونيتسك", "يانج بويز"]
        },
        {
            name: "مباراة إنترناسيونالي ضد آرسنال",
            description: "شاهد مباراة إنترناسيونالي ضد آرسنال مباشرة بجودة عالية.",
            startDate: "2024-11-02T20:00",
            location: { name: "San Siro", city: "ميلانو", country: "IT" },
            teams: ["إنترناسيونالي", "آرسنال"]
        },
        {
            name: "مباراة بايرن ميونخ ضد بنفيكا",
            description: "شاهد مباراة بايرن ميونخ ضد بنفيكا مباشرة بجودة عالية.",
            startDate: "2024-11-02T20:00",
            location: { name: "Allianz Arena", city: "ميونخ", country: "DE" },
            teams: ["بايرن ميونخ", "بنفيكا"]
        },
        {
            name: "مباراة باريس سان جيرمان ضد أتلتيكو مدريد",
            description: "شاهد مباراة باريس سان جيرمان ضد أتلتيكو مدريد مباشرة بجودة عالية.",
            startDate: "2024-11-02T20:00",
            location: { name: "Parc des Princes", city: "باريس", country: "FR" },
            teams: ["باريس سان جيرمان", "أتلتيكو مدريد"]
        },
        {
            name: "مباراة النجم الأحمر ضد برشلونة",
            description: "شاهد مباراة النجم الأحمر ضد برشلونة مباشرة بجودة عالية.",
            startDate: "2024-11-02T20:00",
            location: { name: "Rajko Mitić Stadium", city: "بلغراد", country: "RS" },
            teams: ["النجم الأحمر", "برشلونة"]
        }
    ];

    // Construct JSON-LD data
    const sportsEvents = matches.map(match => ({
        "@type": "SportsEvent",
        "name": match.name,
        "description": match.description,
        "startDate": match.startDate,
        "location": {
            "@type": "Place",
            "name": match.location.name,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": match.location.city,
                "addressCountry": match.location.country
            }
        },
        "performer": match.teams.map(team => ({
            "@type": "SportsTeam",
            "name": team
        })),
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled"
    }));

    // Add sports events to the existing JSON-LD script
    document.querySelector('script[type="application/ld+json"]').textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": sportsEvents
    });
</script>
