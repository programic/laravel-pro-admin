<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>
    <div id="app" v-cloak>
        <router-view></router-view>
    </div>

    <script>
        window.ProDashboard = @json($proDashboardScriptVariables);
    </script>

    @php
        $manifest = json_decode(file_get_contents(base_path() . '/vendor/programic/laravel-admin-ui/dist/manifest.json'), true);
    @endphp

    <script type="module" src="/vendor/pro-admin/{{ $manifest['index.html']['file'] }}"></script>
    <link rel="stylesheet" href="/vendor/pro-admin/{{ $manifest['index.html']['css'][0] }}">
</body> 

</html>
