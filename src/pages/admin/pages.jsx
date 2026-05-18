import { FaUsers } from 'react-icons/fa'
import { MdAdminPanelSettings, MdAssignment } from 'react-icons/md'

export const pages = [
    {
        'url': 'users',
        'icon': <FaUsers />,
        'title': 'Пользователи'
    },
    {
        'url': 'applications',
        'icon': <MdAssignment />,
        'title': 'Заявки'
    },
    {
        'url': 'roles',
        'icon': <MdAdminPanelSettings />,
        'title': 'Роли'
    }
]