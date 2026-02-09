$root='C:\Projects\AgriConnect'
$frontend = Join-Path $root 'agricconnect-frontend'
$files = Get-ChildItem -Path $root -Recurse -File -ErrorAction SilentlyContinue
$hashes = @{}
foreach ($f in $files) {
  try {
    $h = (Get-FileHash -Algorithm MD5 -Path $f.FullName).Hash
    if (-not $hashes.ContainsKey($h)) { $hashes[$h] = @() }
    $hashes[$h] += $f.FullName
  } catch {}
}
$deleted = @()
foreach ($k in $hashes.Keys) {
  $group = $hashes[$k]
  if ($group.Count -gt 1) {
    $rootCopies = $group | Where-Object { (Split-Path $_ -Parent) -ieq $root }
    if ($rootCopies.Count -gt 0) {
      foreach ($f in $group) {
        if ($f -like "*\\agricconnect-frontend\\*") {
          try { Remove-Item -Force -ErrorAction Stop $f; $deleted += $f; Write-Output ("DELETED: " + $f) } catch { Write-Output ("FAILED_DELETE: " + $f) }
        }
      }
    }
  }
}
if ($deleted.Count -eq 0) { Write-Output 'NO_FRONTEND_DUPLICATES_DELETED' } else { Write-Output 'DONE' }
