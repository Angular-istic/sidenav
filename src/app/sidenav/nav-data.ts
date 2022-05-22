export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products'
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routeLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens'
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    },
    {
        routeLink: '',
        icon: 'fal fa-cog',
        label: 'Menu with Children',
        submenuLevel1: [
            {
                routeLink: '',
                icon: 'fal fa-cog', // icon if needed
                label: 'Sub menu level 1',
            },
            {
                routeLink: '',
                icon: 'fal fa-cog', // icon if needed
                label: 'Sub menu level 1',
                submenuLevel2: [
                    {
                        routeLink: '',
                        icon: 'fal fa-cog', // icon if needed
                        label: 'Sub menu level 2',
                    }
                ]
            }
        ]
    },

];