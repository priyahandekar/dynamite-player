const GOOGLE_AUTH_KEY = "AIzaSyAyVSRbfsF0OQcoNRJxARZrCRrgdPRfe7Q";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_AUTH_KEY}`;

export const YOUTUBE_SEARCH_API =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
	{
		name: "Akshay Saini",
		id: "1",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		id: "13",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [
			{
				name: "Akshay Saini",
				id: "2",
				text: "Lorem ipsum dolor sit amet, consectetur adip",
				replies: [],
			},
			{
				name: "Akshay Saini",
				text: "Lorem ipsum dolor sit amet, consectetur adip",
				id: "3",
				replies: [
					{
						name: "Akshay Saini",
						text: "Lorem ipsum dolor sit amet, consectetur adip",
						id: "4",
						replies: [
							{
								name: "Akshay Saini",
								text: "Lorem ipsum dolor sit amet, consectetur adip",
								id: "5",
								replies: [
									{
										name: "Akshay Saini",
										id: "6",
										text: "Lorem ipsum dolor sit amet, consectetur adip",
										replies: [
											{
												name: "Akshay Saini",
												id: "7",
												text: "Lorem ipsum dolor sit amet, consectetur adip",
												replies: [],
											},
										],
									},
									{
										name: "Akshay Saini",
										id: "8",
										text: "Lorem ipsum dolor sit amet, consectetur adip",
										replies: [],
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Akshay Saini",
		id: "9",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		id: "10",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		id: "11",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		id: "12",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
];
