export const projectsData = [
    {
        id: 1,
        name: 'Image Inpainting (Face Reconstruction)',
        description: "A GANS model which is able to regenerate original face from a face with a mask on top. Trained using 30,000 images from Celeb-HQ dataset. Mask added to celeb images and masked and original image sent to DCGAN (Deep Convolution GANS) and model is trained.",
        tools: ['Tensorflow', 'Keras', 'Facenet and Imagenet CNN', 'DCGAN', 'UNet in generator', 'Python - Flask', 'React JS'],
        role: 'ML & Full Stack Developer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Shopping List Sharing Mobile App',
        description: 'Mobile App that allows users to create their own shopping lists and assign it to different family members inside the app only. ',
        tools: ['React JS', 'Tailwind CSS', "MongoDB", "Express JS", "TypeScript", "AWS S3", "Capacitor JS", "Docker and Docker compse", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Crime Prediction System',
        description: 'Web App that allows users to see heatmap of crime in a particular city (Denver city) at future point in time based on historical crime data',
        tools: ['React', 'React Leaflet', 'Python - Flask', 'FBProphet', 'Numpy and Pandas', 'SKLearn - KMeans Clustering'],
        code: '',
        role: 'ML & Full Stack Developer',
        demo: '',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },