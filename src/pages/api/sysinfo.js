import si from 'systeminformation'

export default async function handler(req, res) {
  try {
    // Fetch basic system information
    const [cpu, gpu, memory, osInfo] = await Promise.all([
      si.cpu(),
      si.graphics(),
      si.mem(),
      si.osInfo()
    ])

    // Prepare data for response
    const response = {
      cpuModel: cpu.manufacturer + ' ' + cpu.brand,
      gpuModel: gpu.controllers.length > 0 ? gpu.controllers[0].model : 'No GPU detected',
      ramInstalled: (memory.total / 1024 / 1024 / 1024).toFixed(2) + ' GB',
      os: osInfo.distro + ' ' + osInfo.arch
    }

    // Send response
    res.status(200).json(response)
  } catch (error) {
    console.error('Error fetching system info:', error)
    res.status(500).json({ error: 'Failed to fetch system information' })
  }
}
