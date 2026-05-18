import { FaFileAlt, FaTable, FaFilePowerpoint, FaImage, FaArchive, FaCode, FaFigma, FaLink, FaVideo } from "react-icons/fa"

export const MaterialTypes = {
    document: {
        title: 'Docs',
        icon: FaFileAlt,
        color: '#3B82F6',
        background: 'rgba(59, 130, 246, 0.2)'
    },

    spreadsheet: {
        title: 'Sheet',
        icon: FaTable,
        color: '#22C55E',
        background: 'rgba(34, 197, 94, 0.2)'
    },

    presentation: {
        title: 'Pptx',
        icon: FaFilePowerpoint,
        color: '#F97316',
        background: 'rgba(249, 115, 22, 0.2)'
    },

    image: {
        title: 'Image',
        icon: FaImage,
        color: '#A855F7',
        background: 'rgba(168, 85, 247, 0.2)'
    },

    archive: {
        title: 'Zip',
        icon: FaArchive,
        color: '#F59E0B',
        background: 'rgba(245, 158, 11, 0.2)'
    },

    source: {
        title: 'Code',
        icon: FaCode,
        color: '#06B6D4',
        background: 'rgba(6, 182, 212, 0.2)'
    },

    design: {
        title: 'Design',
        icon: FaFigma,
        color: '#EC4899',
        background: 'rgba(236, 72, 153, 0.2)'
    },

    link: {
        title: 'Link',
        icon: FaLink,
        color: '#6366F1',
        background: 'rgba(99, 102, 241, 0.2)'
    },

    video: {
        title: 'Video',
        icon: FaVideo,
        color: '#EF4444',
        background: 'rgba(239, 68, 68, 0.2)'
    }
}

export default MaterialTypes