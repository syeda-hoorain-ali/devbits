import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const ContactPage = () => {
  return (
    <main className='flex justify-center items-center min-h-screen mt-12'>
      <Card>
        <CardHeader>
          <CardTitle className='text-4xl text-center underline decoration-primary underline-offset-8'>
            Contact Us
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className='space-y-6'>

            <div className='flex gap-6 flex-wrap sm:flex-nowrap'>
              <div className='w-full'>
                <Label htmlFor='first-name'>First Name</Label>
                <Input id='first-name' />
              </div>

              <div className='w-full'>
                <Label htmlFor='last-name'>Last Name</Label>
                <Input id='last-name' />
              </div>
            </div>

            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' />
            </div>

            <div>
              <Label htmlFor='subject'>Subject</Label>
              <Input id='subject' />
            </div>

            <div>
              <Label htmlFor='message'>Message</Label>
              <Textarea id='message' rows={4} />
            </div>

            <Button>Send Message</Button>
          </form>

        </CardContent>
      </Card>
    </main>
  )
}

export default ContactPage
